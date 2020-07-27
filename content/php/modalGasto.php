
<!-- Modal Gasto-->
<div class="modal fade text-light" id="modalGasto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registrar Gasto</h5>
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
                <input type="number" class="form-control" id="cantidadGasto" name="cantidadGasto">
              </div>
              <div class="form-group col-md-6">
                  <label for="inputState">Cuenta</label>
                  <select id="cuentaGasto" class="form-control" name="cuenta">
                  </select>
              </div>
            </div>
            <div class="form-group">
              <label for="categoriaGasto">Categoría</label>
              <input type="text" class="form-control" id="categoriaGasto" placeholder="" name="categoriaGasto">
            </div>
            <div class="form-group">
              <label for="descripcionGasto">Descripción</label>
              <textarea class="form-control" id="descripcionGasto" placeholder="" name="descripcionGasto"></textarea>
            </div>
        	<div class="form-row">
        		<div class="form-group col-md-12">
                 <label >Fecha</label>
                 <input type="date" name="fecha" max="3000-12-31"
                        min="2000-01-01" class="form-control fecha"/>
                </div>

        	</div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button id="subirGasto" type="button" class="btn btn-primary">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>


