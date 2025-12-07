"""
Konfigurasi utama aplikasi Pyramid
"""
from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
import zope.sqlalchemy
import transaction


def main(global_config, **settings):
    """
    Fungsi utama untuk setup aplikasi Pyramid
    """
    # Setup database engine
    engine = engine_from_config(settings, 'sqlalchemy.')
    session_factory = sessionmaker()
    session_factory.configure(bind=engine)
    
    # Setup Pyramid configurator
    config = Configurator(settings=settings)
    
    # Setup transaction manager
    config.include('pyramid_tm')
    
    # Tambahkan database session ke request
    def get_db(request):
        session = session_factory()
        zope.sqlalchemy.register(session)
        return session
    
    config.add_request_method(get_db, 'dbsession', reify=True)
    
    # Setup routes untuk API
    config.add_route('get_all_matakuliah', '/api/matakuliah', request_method='GET')
    config.add_route('create_matakuliah', '/api/matakuliah', request_method='POST')
    config.add_route('get_matakuliah', '/api/matakuliah/{id}', request_method='GET')
    config.add_route('update_matakuliah', '/api/matakuliah/{id}', request_method='PUT')
    config.add_route('delete_matakuliah', '/api/matakuliah/{id}', request_method='DELETE')
    
    # Scan untuk mencari views
    config.scan('.views')
    
    return config.make_wsgi_app()