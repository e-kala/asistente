<!-- Modal Ingreso-->
<div class="modal fade" id="ingresoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registrar Ingreso</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                  <!--Cantidad-->
                <label for="inputEmail4">Cantidad</label>
                <input type="number" class="form-control" id="cantidadIngreso" name="cantidadIngreso">
              </div>
              <div class="form-group col-md-6">
                  <label for="inputState">Cuenta</label>
                  <select id="cuenta" class="form-control" name="cuenta">
                    <option selected>Efectivo</option>
                    <option>Bancomer</option>
                  </select>
              </div>
            </div>
            <div class="form-group">
              <label for="categoriaIngreso">Categoría</label>
              <input type="text" class="form-control" id="categoriaIngreso" placeholder="" name="categoriaIngreso">
            </div>
            <div class="form-group">
              <label for="descripcionIngreso">Descripción</label>
              <textarea class="form-control" id="descripcionIngreso" placeholder="" name="descripcionIngreso"></textarea>
            </div>
        	<div class="form-row">
        		<div class="form-group col-md-12">
                 <label >Fecha</label>
                 <input type="date" name="fecha" max="3000-12-31"
                        min="2000-01-01" class="form-control fecha" val=""/>
                </div>

        	</div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button id="subirIngreso" type="button" class="btn btn-primary">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>
