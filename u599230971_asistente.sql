-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-06-2020 a las 06:11:24
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
  `tipo_cuenta` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastos`
--

CREATE TABLE `gastos` (
  `id_gasto` int(11) NOT NULL,
  `cantidad_gasto` decimal(50,2) NOT NULL,
  `categoria_gasto` varchar(50) NOT NULL,
  `descripcion_gasto` varchar(150) NOT NULL,
  `cuenta_gasto` varchar(250) NOT NULL,
  `fecha_gasto` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gastos`
--

INSERT INTO `gastos` (`id_gasto`, `cantidad_gasto`, `categoria_gasto`, `descripcion_gasto`, `cuenta_gasto`, `fecha_gasto`) VALUES
(6, '50.00', 'Recarga', 'Telcel', 'Efectivo', '2020-04-25'),
(7, '50.00', 'Comida', 'Pan', 'Efectivo', '2020-04-26'),
(8, '150.00', 'Tia Lis', 'Semana', 'Efectivo', '2020-04-26'),
(9, '1000.00', 'Amolian', 'Abono moto', 'Efectivo', '2020-04-26'),
(10, '200.00', 'Pclabs', 'Pago tanya marketing', 'Efectivo', '2020-04-26'),
(11, '400.00', 'Mom', 'Apoyo', 'Efectivo', '2020-04-27'),
(12, '20.00', 'Comida', 'Galletas', 'Efectivo', '2020-05-04'),
(13, '27.00', 'Comida', 'Chocolate', 'Efectivo', '2020-05-04'),
(15, '217.00', 'Krystel', 'Apoyo', 'Efectivo', '2020-04-28'),
(16, '150.00', 'Comida', 'Cafe y agua', 'Efectivo', '2020-04-28'),
(17, '98.00', 'Coppel', 'Abono', 'Efectivo', '2020-05-03'),
(18, '1000.00', 'Amolian', 'Abono Moto', 'Efectivo', '2020-05-03'),
(19, '1000.00', 'Ocio', 'Squares', 'Efectivo', '2020-05-04'),
(20, '200.00', 'Lokanath', 'Adelanto diseño', 'Efectivo', '2020-05-04'),
(21, '600.00', 'Comida', 'Tia', 'Efectivo', '2020-06-01'),
(22, '1000.00', 'Moto', 'Abono moto Amolian', 'Efectivo', '2020-06-04'),
(23, '35.00', 'Medicamento', 'Loratadina', 'Efectivo', '2020-06-10'),
(24, '250.00', 'Envio', 'Ajna', 'Efectivo', '2020-06-11'),
(25, '100.00', 'Coppel', 'Abono', 'Efectivo', '2020-06-14');

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
  `cantidad_ingreso` decimal(50,2) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `cuenta_ingreso` varchar(150) NOT NULL,
  `categoria_ingreso` varchar(100) NOT NULL,
  `descripcion_ingreso` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ingresos`
--

INSERT INTO `ingresos` (`id_ingreso`, `cantidad_ingreso`, `fecha_ingreso`, `cuenta_ingreso`, `categoria_ingreso`, `descripcion_ingreso`) VALUES
(69, '3044.00', '2020-04-24', 'Efectivo', 'Nómina', 'Reselco'),
(70, '1027.54', '2020-04-24', 'Bancomer', 'Ahorros', ''),
(71, '637.25', '2020-04-25', 'Bancomer', 'AirTm', 'Fondeo en cuenta'),
(73, '1600.00', '2020-05-04', 'Bancomer', 'Nómina', 'Debo 122'),
(74, '1500.00', '2020-05-08', 'Efectivo', 'Nómina', 'Reselco'),
(75, '1000.00', '2020-05-31', 'Efectivo', 'Nómina', 'Reselco'),
(76, '600.00', '2020-06-02', 'Efectivo', 'Nómina', 'Reselco'),
(77, '1000.00', '2020-06-04', 'Efectivo', 'Nómina', 'Reselco, adelanto semana'),
(78, '300.00', '2020-06-12', 'Bancomer', 'Nómina', 'Reselco'),
(79, '1300.00', '2020-06-13', 'Bancomer', 'Nómina', 'Reselco'),
(80, '100.00', '2020-06-29', 'Efectivo', 'prueba', '124');

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
  `cantidad_transferencia` double NOT NULL,
  `de_cuenta` varchar(150) NOT NULL,
  `a_cuenta` varchar(150) NOT NULL,
  `fecha_transferencia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(150) NOT NULL,
  `correo_usuario` varchar(100) NOT NULL,
  `pass_usuario` varchar(50) NOT NULL,
  `privilegios` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `correo_usuario`, `pass_usuario`, `privilegios`) VALUES
(1, 'Eka', 'caiman.mistico@gmail.com', '12345', 'admin'),
(2, 'admin', 'admin@demo.com', 'root', 'admin');

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
  MODIFY `id_cuenta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `gastos`
--
ALTER TABLE `gastos`
  MODIFY `id_gasto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `ideas`
--
ALTER TABLE `ideas`
  MODIFY `id_idea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `ingresos`
--
ALTER TABLE `ingresos`
  MODIFY `id_ingreso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id_pagos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `transferencias`
--
ALTER TABLE `transferencias`
  MODIFY `id_transferencia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
