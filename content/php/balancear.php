<div class="balanceo container bgbalanceochange mt-4 pt-4" style="min-height: 100vh; display: none;">
	<div class="modal-dialog" role="document">
    <div class="modal-content modingresogasto">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Balancear cuenta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form>
            <div class="p-2 mb-1 font-weight-bold">Saldo disponible: <span id="balacmodalga" class="font-italic font-weight-bold"></span> </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                  <!--Cantidad-->
                <label for="inputEmail4">Cantidad</label>
                <input type="number" class="form-control" id="cantidad" name="cantidad">
              </div>
              <div class="form-group col-md-6">
                  <label for="inputState">Cuenta</label>
                  <select id="cuenta" class="form-control" name="cuenta">
                  </select>
              </div>
            </div>
            <div class="form-group">
              <label for="categoria">Categoría</label>
              <input type="text" class="form-control" id="categoria" placeholder="" name="categoria">
            </div>
            <div class="form-group">
              <label for="descripcion">Descripción</label>
              <textarea class="form-control" id="descripcion" placeholder="" name="descripcion"></textarea>
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
        <button id="subirBalanceo" type="button" class="btn btn-primary">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>

