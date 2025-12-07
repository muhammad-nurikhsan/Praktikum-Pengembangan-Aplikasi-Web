from setuptools import setup, find_packages

requires = [
    'pyramid',
    'pyramid_debugtoolbar',
    'waitress',
    'sqlalchemy',
    'psycopg2-binary',
    'alembic',
    'pyramid_tm',
    'zope.sqlalchemy',
]

setup(
    name='matakuliah_app',
    version='0.0',
    description='Aplikasi Manajemen Matakuliah dengan Pyramid',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=requires,
    entry_points={
        'paste.app_factory': [
            'main = matakuliah_app:main',
        ],
    },
)