<link rel="stylesheet" type="text/css" href="../content/style/predef.css">

<style type="text/css">
	.bg-common-0{
		background: #2B2B3F;
	}
	.bg-common-1{
		background: #272736
	}
	.bg-common-2{
		background: #212136;
	}
	.bg-common-3{
		background: #131322;
	}
	.bg-common-4{
		background: #18182E;
	}
	.terminal{
		background: #272736;
		color: #34FF00;
		font-family: monospace;
		font-weight: bold;
	}
	.box-shadow-simple{
		box-shadow: 0px 0px 5px rgb(10,10,10,0.10);
	}

	
</style>
<div class="container-fluid">
	<div class="row p-4 bg-common-2 box-shadow-simple">
		<div class="col-md-12">
			<h2 class="text-light text-left">Panel de administración<i class="fa fa-server ml-2" aria-hidden="true"></i></h2>
		</div>
	</div>
	<div class="row p-4 bg-common-0"style="min-height: 100vh;">
		<div class="col-xs-12 col-md-4 box-shadow-simple p-4 bg-common-2">
			<h4 class="pb-3 border-bottom text-primary">Herramientas</h4>
			<div class="p-4 d-flex flex-wrap justify-content-start">
				<button id="btn-terminal" class="btn flex-grow-1 btn-primary m-2" type="button">Terminal<i class="fa fa-terminal ml-2" aria-hidden="true"></i></button>
				<button id="btn-terminal" class="btn flex-grow-1 btn-success m-2" type="button">Modo gráfico</button>
			</div>
		</div>
		<div class="col-xs-12 col-md-8 bg-common-4 pt-3">
			<!-- Terminal -->
			<div id="terminal" class="bg-common-4 card-body">
				<form rows="5" style="resize: none; outline: none; height: 600px;" id="terminal-textarea" class="rounded bg-common-4 overflow-auto  outline-0 p-4">
					<input value="bonsaiasistente@admin - 2020"  type="text" id="default-input-term" class="input-terminal col p-2 rounded border-0 outline-none bg-transparent terminal " disabled="true">
					<input value="Hi, type the command 'help()' to get the list of available commands."  type="text" id="default-input-term" class="input-terminal col p-2 rounded border-0 outline-none bg-transparent terminal " disabled="true">

					<input id="writehere" value="" placeholder="Write here..."  type="text" id="default-input-term" class="input-terminal col p-2 rounded border-0 outline-none bg-transparent terminal " >
				</form>
			</div>
		</div>
		<div id="options-terminal" class="d-none bg-common-3 p-2 position-fixed bottom margin-auto left right box-shadow-simple">
			<div class="d-flex justify-content-between align-items-center align-content-center">
				<div class="box-shadow-simple d-flex justify-content-start">
					<button class="btn-link bg-common-0 rounded text-primary font-weight-bold border-0 p-2 m-2">Foreground</button>
					<button class="btn-link bg-common-0 rounded text-primary font-weight-bold border-0 p-2 m-2">Background</button>
					<button class="btn-link bg-common-0 rounded text-primary font-weight-bold border-0 p-2 m-2">Max</button>
					<button class="btn-link bg-common-0 rounded text-primary font-weight-bold border-0 p-2 m-2">Min</button>
				</div>
				<button id="close-options-terminal" class="text-primary cursor-pointer bg-common-0 rounded font-weight-bold border-0 p-2 m-2">x</button>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">

	const terminal = document.getElementById("btn-terminal")
	const options_terminal = document.getElementById("options-terminal")
	let terminal_opened = false

	terminal.onpointerdown = function(){
		if (terminal_opened == false){
			options_terminal.classList.remove("d-none")
			options_terminal.animate([{
				transform:"translateY(100%)"
			},{
				transform:"translateY(0%)"
			}],{duration:400, iterations:1})
			terminal_opened = true
		}
	}

	const close_optermin = document.getElementById("close-options-terminal")
	close_optermin.onpointerdown = function(){
		if (terminal_opened == true){
			terminal_opened = false
			options_terminal.classList.add("d-none")
		}
	}

</script>

<script type="text/javascript" src="./content/js/admin/admin-terminal.js"></script>
