var cita;
var bd=[];

class Cita {
	constructor (idCita,nombrePaciente,centroMedico,fechaCita,nombreMedico)
	{
		this.idCita = idCita;
		this.nombrePaciente = nombrePaciente;
		this.centroMedico = centroMedico;
		this.fechaCita = fechaCita;
		this.nombreMedico = nombreMedico;
	}
}

class implementacionCita{
	
	static addCita(bd){
		var idCita = CalcularId.calculaid(bd);
		var nombrePaciente = prompt("Introduzca su nombre: ");
		var centroMedico = prompt("Indique su centro medico: ");
		var fechaCita = prompt("Indique la fecha en la que desea su cita: ");
		var nombreMedico = prompt("Introduzca el nombre de su medico: ");
		
		
		cita = new Cita(idCita,nombrePaciente,centroMedico,fechaCita,nombreMedico);
		
		bd.push(cita)
		return bd;
	}
	static borrarCita(bd){
		if(bd.length!=0){
			var borrar =prompt("Introduzca el id de la cita:");
				for(var i=0;i<bd.length;i++){
					if(bd[i].idCita==borrar)
						delete(bd[i]);
							
					return bd;
				}
		}
	}
	static mostrarCita(bd){
		if(bd.length!=0){
			for(var i=0;i<bd.length;i++)
			{
					alert("Id: "+bd[i].idCita+"\nNombre: "+bd[i].nombrePaciente+"\nCentro Medico: "+bd[i].centroMedico+"\nFecha de la cita: "+bd[i].fechaCita+"\nNombre del medico: "+bd[i].nombreMedico);
			}
		}
		else
			alert("No hay ninguna cita")
	
	}
}


class CalcularId{
	
	static calculaid(bd){
		if(bd.length!=0){
			var id=0;
			for(var i=0;i<bd.length;i++) {
				var j=bd[i].idCita;
				if(id<j)
					id=j;
			}
			return id+1;
		}
		else
			return 0;
		}
}

function Menu(){
	bd;
	var opcion;
	do{
		opcion=Number(prompt("1-Pedir cita\n2-Borrar Cita\n3-Ver Cita\n0-Salir\n Introduzca una opcion:"));
		switch(opcion)
	 	{
			case 1:
				 implementacionCita.addCita(bd);
				 break;
			case 2:
				 implementacionCita.borrarCita(bd);
				 break;
			case 3:
				implementacionCita.mostrarCita(bd);
				break;
		 }
	
	 }while(opcion!=0);
}