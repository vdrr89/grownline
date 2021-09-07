create table prod(
    id integer not null auto_increment primary key,
    lnk_img varchar(256),
    nombre varchar (48),
    descripcion varchar(256),
    precio integer,
    cantidad integer
);