-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-10-2020 a las 20:12:55
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u539976020_bonsai`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `Gasto` (IN `usuario` VARCHAR(150), IN `cantidadgasto` DECIMAL(50,2), IN `cuenta` VARCHAR(250), IN `fecha` DATE, IN `descripciongasto` VARCHAR(150), IN `categoriagasto` VARCHAR(50))  BEGIN
	INSERT INTO gastos(usuario_gasto, cantidad_gasto, cuenta_gasto, fecha_gasto, categoria_gasto, descripcion_gasto) VALUES(usuario, cantidadgasto, cuenta, fecha, categoriagasto, descripciongasto);
	UPDATE cuentas SET balance = balance - cantidadgasto WHERE nombre_cuenta = cuenta AND usuario_cuenta = usuario;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ingreso` (IN `usuario` VARCHAR(150), IN `cantidadingreso` DECIMAL(50,2), IN `cuenta` VARCHAR(150), IN `fecha` DATE, IN `descripcioningreso` VARCHAR(250), IN `categoriaingreso` VARCHAR(100))  BEGIN
	INSERT INTO ingresos(usuario_ingreso, cantidad_ingreso, cuenta_ingreso, fecha_ingreso, categoria_ingreso, descripcion_ingreso) VALUES(usuario, cantidadingreso, cuenta, fecha, categoriaingreso, descripcioningreso);
	UPDATE cuentas SET balance = balance + cantidadingreso WHERE usuario_cuenta = usuario AND nombre_cuenta = cuenta;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Transfer` (IN `de_cuenta` VARCHAR(150), IN `a_cuenta` VARCHAR(150), IN `cantidad` DOUBLE, IN `usuario` VARCHAR(150), IN `fecha` DATE, IN `descripcion` VARCHAR(150))  BEGIN
	INSERT INTO transferencias(usuario_transferencia, cantidad_transferencia, de_cuenta, a_cuenta, fecha_transferencia) VALUES(usuario, cantidad, de_cuenta, a_cuenta, fecha);
	INSERT INTO gastos(usuario_gasto, cantidad_gasto, cuenta_gasto, fecha_gasto, categoria_gasto, descripcion_gasto) VALUES(usuario, cantidad, de_cuenta, fecha, 'Transferencia', descripcion);
	INSERT INTO ingresos(usuario_ingreso, cantidad_ingreso, cuenta_ingreso, fecha_ingreso, categoria_ingreso, descripcion_ingreso) VALUES(usuario, cantidad, a_cuenta, fecha, 'Transferencia', descripcion);
	UPDATE cuentas SET balance = balance - cantidad WHERE nombre_cuenta = de_cuenta;
	UPDATE cuentas SET balance = balance + cantidad WHERE nombre_cuenta = a_cuenta;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `id_cuenta` int(11) NOT NULL,
  `nombre_cuenta` varchar(150) NOT NULL,
  `tipo_cuenta` varchar(150) NOT NULL,
  `usuario_cuenta` varchar(150) NOT NULL,
  `balance` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`id_cuenta`, `nombre_cuenta`, `tipo_cuenta`, `usuario_cuenta`, `balance`) VALUES
(1, 'one', 'NULL', 'darkatsji', 300),
(2, 'two', 'NULL', 'darkatsji', 200),
(3, 'three', 'NULL', 'darkatsji', 300),
(4, 'four', 'NULL', 'darkatsji', 305),
(5, 'dom', 'NULL', 'darko', 0);

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
(1, 'darkatsji', '3.00', 'dasjdajsdas', 'g', 'one    ', '2020-09-19'),
(2, 'darkatsji', '200.00', 'jjjjjjjjjjjjjjjjjjjjjjjj', 'g', 'three    ', '2020-09-19'),
(3, 'darkatsji', '395.00', 'Balanceo', 'Balanceo', 'four ', '2020-09-19'),
(4, 'darkatsji', '310.00', 'g', 'g', 'one ', '2020-09-27');

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
(1, 'darkatsji', '100.00', '2020-09-19', 'one', 'i', 'i1'),
(2, 'darkatsji', '200.00', '2020-09-19', 'two', 'i2', 'jojo'),
(3, 'darkatsji', '500.00', '2020-09-19', 'three', 'wuan toooo', 'owoama'),
(4, 'darkatsji', '700.00', '2020-09-19', 'four', 'xai chaaaa', 'xai'),
(5, 'darkatsji', '103.00', '2020-09-19', 'one', 'Balanceo', 'Balanceo'),
(6, 'darkatsji', '10.00', '2020-09-19', 'one', 'Balanceo', 'Balanceo'),
(7, 'darkatsji', '305.00', '2020-09-27', 'one', 'Balanceo', 'Balanceo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logger`
--

CREATE TABLE `logger` (
  `id_logs` int(11) NOT NULL,
  `logs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
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
-- Estructura de tabla para la tabla `sesiones`
--

CREATE TABLE `sesiones` (
  `id` int(255) NOT NULL,
  `sesion_usuario` varchar(555) NOT NULL,
  `inicio_sesion_fecha` date NOT NULL,
  `inicio_sesion_hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sesiones`
--

INSERT INTO `sesiones` (`id`, `sesion_usuario`, `inicio_sesion_fecha`, `inicio_sesion_hora`) VALUES
(6, 'darkatsji', '2020-10-12', '10:38:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stripe`
--

CREATE TABLE `stripe` (
  `id` int(255) NOT NULL,
  `stripe_id_client` varchar(999) NOT NULL,
  `client_secret` varchar(555) NOT NULL,
  `usuario_card` varchar(555) NOT NULL,
  `email_card` varchar(555) NOT NULL,
  `status` varchar(555) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `stripe`
--

INSERT INTO `stripe` (`id`, `stripe_id_client`, `client_secret`, `usuario_card`, `email_card`, `status`) VALUES
(40, 'cus_IByREDBvvg5Egy', 'seti_1HbaUaLQLtZT0x6x42naZwHw_secret_IByR9MIcsi4u3o7x2ZvZYlR4diVYAoZ', 'darkatsji', 'darkatsji', 'pendiente');

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
(6, 'Eka', 500, 'Efectivo', 'Ahorro', '2020-08-04'),
(7, 'darkatsji', 200, 'Trabajo', 'Efectivo', '2020-09-19'),
(8, 'darkatsji', 400, 'Efectivo', 'Virtual', '2020-09-19'),
(9, 'darkatsji', 4000, 'Efectivo', 'Trabajo', '2020-09-19'),
(10, 'darkatsji', 2000, 'Trabajo', 'Virtual', '2020-09-19');

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
  `usr_config` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `correo_usuario`, `pass_usuario`, `privilegios`, `usr_config`) VALUES
(2, 'admin', 'admin@demo.com', 'root', 'admin', '0'),
(4, 'Eka', 'caiman.mistico@gmail.com', 'abcfedghi', 'normal', '{\"mode\":\"dark\",\"background\":\"14.gif\",\"time_bal\":\"4\"}'),
(5, 'darkatsji', 'darkatsji', 'abc', '{\"state\":\"premium\",\"fechaExpiracion\":\"2021-01-12\"}', '{\"mode\":\"light\",\"background\":\"2/15.png\",\"time_bal\":\"5\",\"transparency\":\"1\",\"pj_change\":\"./content/img/iconos/facehappy.gif\",\"pj_hidden\":\"true\",\"aside_hidden\":\"true\",\"caducidad\":\"37\",\"ingreso_minimo_mensual\":\"1000\",\"points\":40}'),
(6, 'wun', 'wun', 'adg', 'free', '{\"mode\":\"light\",\"background\":\"2/15.png\",\"time_bal\":\"5\",\"transparency\":\"1\",\"pj_change\":\"./content/img/iconos/facehappy.gif\",\"pj_hidden\":\"true\",\"aside_hidden\":\"true\",\"caducidad\":\"1\",\"ingreso_minimo_mensual\":\"1000\"}'),
(7, 'donks', 'donks', 'abc', 'free', '{\"mode\":\"light\",\"background\":\"2/15.png\",\"transparency\":\"1\",\"time_bal\":\"5\",\"caducidad\":\"30\",\"aside_hidden\":\"true\",\"pj_change\":\"./content/img/iconos/facehappy.gif\",\"pj_hidden\":\"true\",\"ingreso_minimo_mensual\":\"1000\"}'),
(8, 'engo', 'engo', 'abc', 'free', '{\"mode\":\"white\",\"background\":\"2/15.png\",\"time_bal\":\"5\",\"transparency\":\"1\",\"pj_change\":\"./content/img/iconos/facehappy.gif\",\"pj_hidden\":\"true\",\"aside_hidden\":\"true\",\"caducidad\":\"30\",\"ingreso_minimo_mensual\":\"1000\"}'),
(9, 'darko', 'darko', 'adg', 'free', '{\"mode\":\"dark\",\"background\":\"2/15.png\",\"time_bal\":\"5\",\"transparency\":\"1\",\"pj_change\":\"./content/img/iconos/facehappy.gif\",\"pj_hidden\":\"true\",\"aside_hidden\":\"true\",\"caducidad\":\"30\",\"ingreso_minimo_mensual\":\"1000\"}'),
(10, 'mi', 'mi', 'ade', 'free', '{\"mode\":\"light\",\"background\":\"2/15.png\",\"transparency\":\"1\",\"time_bal\":\"5\",\"caducidad\":\"30\",\"aside_hidden\":\"true\",\"pj_change\":\"./content/img/iconos/facehappy.gif\",\"pj_hidden\":\"true\",\"ingreso_minimo_mensual\":\"1000\"}'),
(11, 'k', 'k', 'abc', 'free', '{\"mode\":\"dark\",\"background\":\"2/15.png\",\"time_bal\":\"5\",\"transparency\":\"1\",\"pj_change\":\"./content/img/iconos/facehappy.gif\",\"pj_hidden\":\"true\",\"aside_hidden\":\"true\",\"caducidad\":\"30\",\"ingreso_minimo_mensual\":\"1000\",\"points\":50}');

--
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `deudas`
--

CREATE TABLE `deudas` (
  `id_deuda` int(11) NOT NULL,
  `usuario` int(11) NOT NULL,
  `cuenta` varchar(100) NOT NULL,
  `plazo_dias` int(11) NOT NULL,
  `plazo_cantidad` double NOT NULL,
  `cantidad_total` double NOT NULL,
  `primer_pago` date
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Indices de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `stripe`
--
ALTER TABLE `stripe`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id_cuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `gastos`
--
ALTER TABLE `gastos`
  MODIFY `id_gasto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ideas`
--
ALTER TABLE `ideas`
  MODIFY `id_idea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `ingresos`
--
ALTER TABLE `ingresos`
  MODIFY `id_ingreso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
-- AUTO_INCREMENT de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `stripe`
--
ALTER TABLE `stripe`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `transferencias`
--
ALTER TABLE `transferencias`
  MODIFY `id_transferencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Indices de la tabla `deudas`
--
ALTER TABLE `deudas`
  ADD PRIMARY KEY (`id_deuda`),
  ADD CONSTRAINT FOREIGN KEY (`usuario`) REFERENCES usuarios (id_usuario);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
