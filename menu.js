let menu = `
		<div id="menu" class="btn-group" role="group" aria-label="Button group with nested dropdown">
		  <button type="button" class="btn btn-secondary" onclick="location.href='index.html'">За нас</button>
		  <button type="button" class="btn btn-secondary" onclick="location.href='sabori.html'">Събори</button>
		  <!-- <button type="button" class="btn btn-secondary">2</button> -->

		  <div class="btn-group" role="group">
		    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		      Забележителности
		    </button>
		    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
		      <a class="dropdown-item" href="monuments.html">Паметници</a>
		      <!-- <a class="dropdown-item" href="#">Гледки</a> -->
		      <a class="dropdown-item" href="opoznai.html">Опознай</a>
		    </div>
		  </div>
		</div>
`;