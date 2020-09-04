-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 04-08-2020 a las 07:58:38
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u599230971_asistente`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `id_cuenta` int(11) NOT NULL,
  `nombre_cuenta` varchar(150) NOT NULL,
  `tipo_cuenta` varchar(150) NOT NULL,
  `usuario_cuenta` varchar(150) NOT NULL,
  `balance`double NOT NULL DEFAULT 0 CHECK (balance >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`id_cuenta`, `nombre_cuenta`, `tipo_cuenta`, `usuario_cuenta`, `balance`) VALUES
(2, 'Bancomer', 'NULL', 'Eka', 1000),
(4, 'Efectivo', 'NULL', 'Eka', 1000),
(6, 'Ahorro', 'NULL', 'Eka', 1000),
(9, 'Moto', 'NULL', 'Eka', 1000),
(11, 'pagos', 'NULL', 'Eka', 1000),
(16, 'prueba', 'NULL', 'Eka', 1000),
(26, 'comida', 'NULL', 'Eka', 1000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastos`
--

CREATE TABLE `gastos` (
  `id_gasto` int(11) NOT NULL,
  `usuario_gasto` varchar(150) NOT NULL,
  `cantidad_gasto` decimal(50,2) NOT NULL,
  `categoria_gasto` varchar(50) NOT NULL,
  `descripcion_gasto` varchar(150) NOT NULL,
  `cuenta_gasto` varchar(250) NOT NULL,
  `fecha_gasto` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gastos`
--

INSERT INTO `gastos` (`id_gasto`, `usuario_gasto`, `cantidad_gasto`, `categoria_gasto`, `descripcion_gasto`, `cuenta_gasto`, `fecha_gasto`) VALUES
(6, '', '50.00', 'Recarga', 'Telcel', 'Efectivo', '2020-04-25'),
(7, '', '50.00', 'Comida', 'Pan', 'Efectivo', '2020-04-26'),
(8, '', '150.00', 'Tia Lis', 'Semana', 'Efectivo', '2020-04-26'),
(9, '', '1000.00', 'Amolian', 'Abono moto', 'Efectivo', '2020-04-26'),
(10, '', '200.00', 'Pclabs', 'Pago tanya marketing', 'Efectivo', '2020-04-26'),
(11, '', '400.00', 'Mom', 'Apoyo', 'Efectivo', '2020-04-27'),
(12, '', '20.00', 'Comida', 'Galletas', 'Efectivo', '2020-05-04'),
(13, '', '27.00', 'Comida', 'Chocolate', 'Efectivo', '2020-05-04'),
(15, '', '217.00', 'Krystel', 'Apoyo', 'Efectivo', '2020-04-28'),
(16, '', '150.00', 'Comida', 'Cafe y agua', 'Efectivo', '2020-04-28'),
(17, '', '98.00', 'Coppel', 'Abono', 'Efectivo', '2020-05-03'),
(18, '', '1000.00', 'Amolian', 'Abono Moto', 'Efectivo', '2020-05-03'),
(19, '', '1000.00', 'Ocio', 'Squares', 'Efectivo', '2020-05-04'),
(20, '', '200.00', 'Lokanath', 'Adelanto diseño', 'Efectivo', '2020-05-04'),
(21, '', '600.00', 'Comida', 'Tia', 'Efectivo', '2020-06-01'),
(22, '', '1000.00', 'Moto', 'Abono moto Amolian', 'Efectivo', '2020-06-04'),
(23, '', '35.00', 'Medicamento', 'Loratadina', 'Efectivo', '2020-06-10'),
(24, '', '250.00', 'Envio', 'Ajna', 'Efectivo', '2020-06-11'),
(25, '', '100.00', 'Coppel', 'Abono', 'Efectivo', '2020-06-14'),
(27, 'Eka', '400.00', 'prueba', 'prueba', 'Efectivo', '2020-07-19'),
(31, 'Eka', '300.00', 'prueba', 'prueba', 'Bancomer', '2020-08-03'),
(32, 'Eka', '100.00', 'prueba', 'prueba', 'null', '2020-08-03'),
(33, 'Eka', '500.00', 'prueba4', 'prueba4', 'null', '2020-08-03'),
(34, 'Eka', '100.00', 'prueba5', 'prueba5', 'null', '2020-08-03'),
(35, 'Eka', '100.00', 'fsd', 'sdfsd', 'comida', '2020-08-03'),
(36, 'Eka', '100.00', 'prueba7', 'prueba7', 'Ahorro', '2020-08-03'),
(37, 'Eka', '200.00', 'Transferencia', 'Transferencia', 'Efectivo', '2020-08-04'),
(38, 'Eka', '1000.00', 'Transferencia', 'Transferencia', 'Bancomer', '2020-08-04'),
(39, 'Eka', '500.00', 'Transferencia', 'Transferencia de Efectivo a Ahorro', 'Efectivo', '2020-08-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ideas`
--

CREATE TABLE `ideas` (
  `id_idea` int(11) NOT NULL,
  `titulo_idea` varchar(100) NOT NULL,
  `contenido_idea` varchar(235) NOT NULL,
  `idea_fecha_creada` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ideas`
--

INSERT INTO `ideas` (`id_idea`, `titulo_idea`, `contenido_idea`, `idea_fecha_creada`) VALUES
(1, 'null', 'Comprar cuando el precio sea menor a 210,927.02 (0.0084782)', '2020-06-17'),
(2, 'null', 'terminar rediseño', '2020-06-17'),
(3, 'null', 'sitio de alx', '2020-06-17'),
(4, 'null', 'inversiones', '2020-06-17'),
(5, 'null', 'cuentas -> balance', '2020-06-17'),
(6, 'null', 'Horas de trabajo', '2020-06-17'),
(7, 'null', 'Objetivos claros-> metas -> tiempo -> $ -> claridad -> aprendizaje -> personas', '2020-06-17'),
(8, 'null', 'horas de trabajo', '2020-06-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingresos`
--

CREATE TABLE `ingresos` (
  `id_ingreso` int(11) NOT NULL,
  `usuario_ingreso` varchar(150) NOT NULL,
  `cantidad_ingreso` decimal(50,2) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `cuenta_ingreso` varchar(150) NOT NULL,
  `categoria_ingreso` varchar(100) NOT NULL,
  `descripcion_ingreso` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ingresos`
--

INSERT INTO `ingresos` (`id_ingreso`, `usuario_ingreso`, `cantidad_ingreso`, `fecha_ingreso`, `cuenta_ingreso`, `categoria_ingreso`, `descripcion_ingreso`) VALUES
(69, '', '3044.00', '2020-04-24', 'Efectivo', 'Nómina', 'Reselco'),
(70, '', '1027.54', '2020-04-24', 'Bancomer', 'Ahorros', ''),
(71, '', '637.25', '2020-04-25', 'Bancomer', 'AirTm', 'Fondeo en cuenta'),
(73, '', '1600.00', '2020-05-04', 'Bancomer', 'Nómina', 'Debo 122'),
(74, '', '1500.00', '2020-05-08', 'Efectivo', 'Nómina', 'Reselco'),
(75, '', '1000.00', '2020-05-31', 'Efectivo', 'Nómina', 'Reselco'),
(76, '', '600.00', '2020-06-02', 'Efectivo', 'Nómina', 'Reselco'),
(77, '', '1000.00', '2020-06-04', 'Efectivo', 'Nómina', 'Reselco, adelanto semana'),
(78, '', '300.00', '2020-06-12', 'Bancomer', 'Nómina', 'Reselco'),
(79, '', '1300.00', '2020-06-13', 'Bancomer', 'Nómina', 'Reselco'),
(80, '', '100.00', '2020-06-29', 'Efectivo', 'prueba', '124'),
(81, '', '500.00', '2020-07-19', 'Efectivo', 'prueba', 'prueba'),
(82, '', '300.00', '2020-07-19', 'Efectivo', 'prueba1', 'prueba'),
(83, '', '300.00', '2020-07-19', 'Efectivo', 'prueba1', 'prueba'),
(84, '', '700.00', '2020-07-19', 'Efectivo', 'prueba', 'prueba2'),
(85, '', '200.00', '2020-07-19', 'Efectivo', 'prueba', 'fea'),
(86, '', '400.00', '2020-07-19', 'Efectivo', 'prueba', 'prueba'),
(88, 'Eka', '600.00', '2020-07-19', 'Efectivo', 'prueba', '2prueba'),
(89, 'Eka', '300.00', '2020-08-03', 'Moto', 'prueba2', 'prueba2'),
(90, 'Eka', '50.00', '2020-08-03', 'comida', 'prueba3', 'prueba3'),
(91, 'Eka', '2000.00', '2020-08-03', 'Bancomer', 'Asistente', 'Ingreso'),
(92, 'Eka', '200.00', '2020-08-04', 'Bancomer', 'Transferencia', 'Transferencia'),
(93, 'Eka', '1000.00', '2020-08-04', 'Efectivo', 'Transferencia', 'Transferencia'),
(94, 'Eka', '500.00', '2020-08-04', 'Ahorro', 'Transferencia', 'Transferencia de Efectivo a Ahorro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logger`
--

CREATE TABLE `logger` (
  `id_logs` int(11) NOT NULL,
  `logs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`logs`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id_pagos` int(11) NOT NULL,
  `nombre_pagos` varchar(50) NOT NULL,
  `monto_pagos` varchar(50) NOT NULL,
  `fecha_a_pagar` date NOT NULL,
  `fecha_pagado` date NOT NULL,
  `Estado` varchar(100) NOT NULL,
  `frecuencia_pago` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id_pagos`, `nombre_pagos`, `monto_pagos`, `fecha_a_pagar`, `fecha_pagado`, `Estado`, `frecuencia_pago`) VALUES
(1, 'Tia Semana', '200', '2020-06-13', '0000-00-00', 'Pendiente', 'Semanal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transferencias`
--

CREATE TABLE `transferencias` (
  `id_transferencia` int(11) NOT NULL,
  `usuario_transferencia` varchar(150) NOT NULL,
  `cantidad_transferencia` double NOT NULL,
  `de_cuenta` varchar(150) NOT NULL,
  `a_cuenta` varchar(150) NOT NULL,
  `fecha_transferencia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `transferencias`
--

INSERT INTO `transferencias` (`id_transferencia`, `usuario_transferencia`, `cantidad_transferencia`, `de_cuenta`, `a_cuenta`, `fecha_transferencia`) VALUES
(1, 'Eka', 300, 'Bancomer', 'Bancomer', '2020-08-03'),
(2, 'Eka', 300, 'Bancomer', 'Bancomer', '2020-08-03'),
(3, 'Eka', 500, 'Ahorro', 'Bancomer', '2020-08-03'),
(4, 'Eka', 200, 'Efectivo', 'Bancomer', '2020-08-04'),
(5, 'Eka', 1000, 'Bancomer', 'Efectivo', '2020-08-04'),
(6, 'Eka', 500, 'Efectivo', 'Ahorro', '2020-08-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(150) NOT NULL,
  `correo_usuario` varchar(100) NOT NULL,
  `pass_usuario` varchar(50) NOT NULL,
  `privilegios` varchar(50) NOT NULL,
  `usr_config` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`usr_config`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `correo_usuario`, `pass_usuario`, `privilegios`, `usr_config`) VALUES
(2, 'admin', 'admin@demo.com', 'root', 'admin', '0'),
(4, 'Eka', 'caiman.mistico@gmail.com', 'abcfedghi', 'normal', '{\"mode\":\"dark\",\"background\":\"14.gif\",\"time_bal\":\"4\"}');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD PRIMARY KEY (`id_cuenta`);

--
-- Indices de la tabla `gastos`
--
ALTER TABLE `gastos`
  ADD PRIMARY KEY (`id_gasto`);

--
-- Indices de la tabla `ideas`
--
ALTER TABLE `ideas`
  ADD PRIMARY KEY (`id_idea`);

--
-- Indices de la tabla `ingresos`
--
ALTER TABLE `ingresos`
  ADD PRIMARY KEY (`id_ingreso`);

--
-- Indices de la tabla `logger`
--
ALTER TABLE `logger`
  ADD PRIMARY KEY (`id_logs`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id_pagos`);

--
-- Indices de la tabla `transferencias`
--
ALTER TABLE `transferencias`
  ADD PRIMARY KEY (`id_transferencia`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  MODIFY `id_cuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `gastos`
--
ALTER TABLE `gastos`
  MODIFY `id_gasto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `ideas`
--
ALTER TABLE `ideas`
  MODIFY `id_idea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `ingresos`
--
ALTER TABLE `ingresos`
  MODIFY `id_ingreso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT de la tabla `logger`
--
ALTER TABLE `logger`
  MODIFY `id_logs` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id_pagos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `transferencias`
--
ALTER TABLE `transferencias`
  MODIFY `id_transferencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

--
-- STORED PROCEDURES
--
DELIMITER //

CREATE PROCEDURE Transfer(
	IN de_cuenta VARCHAR(150),
	IN a_cuenta VARCHAR(150),
	IN cantidad DOUBLE,
	IN usuario VARCHAR(150),
	IN fecha DATE,
	IN descripcion VARCHAR(150)
)
BEGIN
	INSERT INTO transferencias(usuario_transferencia, cantidad_transferencia, de_cuenta, a_cuenta, fecha_transferencia) VALUES(usuario, cantidad, de_cuenta, a_cuenta, fecha);
	INSERT INTO gastos(usuario_gasto, cantidad_gasto, cuenta_gasto, fecha_gasto, categoria_gasto, descripcion_gasto) VALUES(usuario, cantidad, de_cuenta, fecha, 'Transferencia', descripcion);
	INSERT INTO ingresos(usuario_ingreso, cantidad_ingreso, cuenta_ingreso, fecha_ingreso, categoria_ingreso, descripcion_ingreso) VALUES(usuario, cantidad, a_cuenta, fecha, 'Transferencia', descripcion);
	UPDATE cuentas SET balance = balance - cantidad WHERE nombre_cuenta = de_cuenta;
	UPDATE cuentas SET balance = balance + cantidad WHERE nombre_cuenta = a_cuenta;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE Gasto(
	IN usuario VARCHAR(150),
	IN cantidadgasto DECIMAL(50,2),
	IN cuenta VARCHAR(250),
	IN fecha DATE,
	IN descripciongasto VARCHAR(150),
	IN categoriagasto VARCHAR(50)
)
BEGIN
	INSERT INTO gastos(usuario_gasto, cantidad_gasto, cuenta_gasto, fecha_gasto, categoria_gasto, descripcion_gasto) VALUES(usuario, cantidadgasto, cuenta, fecha, categoriagasto, descripciongasto);
	UPDATE cuentas SET balance = balance - cantidadgasto WHERE nombre_cuenta = cuenta;
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE Ingreso(
	IN usuario VARCHAR(150),
	IN cantidadingreso DECIMAL(50,2),
	IN cuenta VARCHAR(150),
	IN fecha DATE,
	IN descripcioningreso VARCHAR(250),
	IN categoriaingreso VARCHAR(100)
)
BEGIN
	INSERT INTO ingresos(usuario_ingreso, cantidad_ingreso, cuenta_ingreso, fecha_ingreso, categoria_ingreso, descripcion_ingreso) VALUES(usuario, cantidadingreso, cuenta, fecha, categoriaingreso, descripcioningreso);
	UPDATE cuentas SET balance = balance + cantidadingreso WHERE nombre_cuenta = cuenta;
END //

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
