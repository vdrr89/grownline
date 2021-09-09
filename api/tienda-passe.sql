create table prod(
    id integer not null auto_increment primary key,
    lnk_img varchar(256),
    nombre varchar (48),
    descripcion varchar(256),
    precio integer,
    cantidad integer
);

create table usu(
    id integer not null auto_increment primary key, 
    username varchar(100),
    email varchar(100),
    profilepic varbinary(max), 
    nombre varchar(100),
    apellido varchar(100), 
    fechaNac varchar(100), 
    telefono numeric(20,0),
    direccion varchar(100),
    pais varchar(100), 
    categoria varchar(100)
);