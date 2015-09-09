#pragma downcast
#pragma strict
import System.Collections.Generic;

public var GUITitle:String = "Title here";
private var GUIMathTitle:String = "Math Question";
public var height:int = 100;
public var width:int = 100;
public var positionX:int = 100;
public var positionY:int = 100;
public var textToShow:String = "Text to show here" ;
public var imageToShow:Texture2D;
public var destroyMeAfterwards:boolean;
private var inRange:boolean;
private var manualClose:boolean = true;
private var textLength:int;
private var textOffsetHeight = 0.00;
private var Stages:List.<PlantStageClass> = new List.<PlantStageClass>();
private var StageId:int;
private var Plant:GameObject;
private var Mass:List.<Transform> = new List.<Transform>();
private var currentTime:float;
var GizmoColor:Color=Color(255,0,0,255);
var GizmoSize:float=0.5;
var GrowSizeMin:Vector3;
var Cabbage:List.<PlantStageClass> = new List.<PlantStageClass>();
var Pineapples:List.<PlantStageClass> = new List.<PlantStageClass>();
var Grapes:List.<PlantStageClass> = new List.<PlantStageClass>();
var SunFlowers:List.<PlantStageClass> = new List.<PlantStageClass>();
var EggPlant:List.<PlantStageClass> = new List.<PlantStageClass>();
var Carrot:List.<PlantStageClass> = new List.<PlantStageClass>();
var Broccoli:List.<PlantStageClass> = new List.<PlantStageClass>();
var BellPeppers:List.<PlantStageClass> = new List.<PlantStageClass>();
var Radish:List.<PlantStageClass> = new List.<PlantStageClass>();
var Strawberries:List.<PlantStageClass> = new List.<PlantStageClass>();
var Lavender:List.<PlantStageClass> = new List.<PlantStageClass>();
var Hydrangra:List.<PlantStageClass> = new List.<PlantStageClass>();
var Loop:boolean;
var LoopFrom:int;
var StartCase:boolean = false;
var num1:int;
var num2:int;
var rand1:int;
var rand2:int;
private var MathGUI:boolean = true; 
var FinishedPlant:boolean;
private var Score:int = 0;
var clicker:boolean;
var answer:int;
//On Click it creates a stand alone Gui for what was clicked 
function OnMouseDown(){
	num1 = Random.Range(0.0,50.0);
	num2 = Random.Range(0.0,50.0);
	rand1 = Random.Range(num1 -3,num1 +3);
	rand2 = Random.Range(num2 -3,num2+3);
	Debug.Log("Click");
	clicker = true;
	if(FinishedPlant == true){
		Score = Score + 1;
		Debug.Log("This is your Score: " + Score);
		Destroy(gameObject,2f);
	}
}

//Creates the GUI if inRange is true. Has 12 buttons that are clickable runs the one that was clicked with changing
//array stages to the one that was clicked. 
function OnGUI(){
	if(manualClose == false){
		if(inRange == true){
			if(textToShow.Length > (width/10)){
				textOffsetHeight = (Mathf.RoundToInt(textToShow.Length / (width/10))) * 10;
			}
			
			GUI.Box (Rect (positionX,positionY,width,height + 10 + textOffsetHeight), GUITitle);
			GUI.Label(Rect (positionX + 10,positionY + 20, width - 10 ,height - 50), imageToShow);
			GUI.Label(Rect (positionX + 10,positionY + 20 + (height - 50), width+4 ,height - 10 + textOffsetHeight), imageToShow);
			GUI.Label(Rect (positionX + 10,positionY + 20 + (height - 50), width - 10 ,height - 50 + textOffsetHeight), textToShow);
			
			if (GUI.Button (Rect (positionX + 10, positionY + 25,80,20), "Cabbage")) {
				Debug.Log("Cabbage was clicked");
				Stages = Cabbage;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 10,positionY +50,80,20), "Pineapples")) {
				Debug.Log("Pineapples was clicked");
				Stages = Pineapples;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 10,positionY +75,80,20), "Grapes")) {
				Debug.Log("Grapes was clicked");
				Stages = Grapes;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 10,positionY +100,80,20), "SunFlowers")) {
				Debug.Log("SunFlowers was clicked");
				Stages = SunFlowers;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 10,positionY +125,80,20), "EggPlant")) {
				Debug.Log("EggPlant was clicked");
				Stages = EggPlant;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 10,positionY +150,80,20), "Carrot")) {
				Debug.Log("Carrot was clicked");
				Stages = Carrot;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX +110,positionY + 25,80,20), "Broccoli")) {
				Debug.Log("Broccoli was clicked");
				Stages = Broccoli;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 110,positionY +50,80,20), "BellPeppers")) {
				Debug.Log("BellPeppers was clicked");
				Stages = BellPeppers;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			
			if (GUI.Button (Rect (positionX + 110,positionY +75,80,20), "Radish")) {
				Debug.Log("Radish was clicked");
				Stages = Radish;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 110,positionY +100,80,20), "Strawberries")) {
				Debug.Log("Strawberries was clicked");
				Stages = Strawberries;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 110,positionY +125,80,20), "Lavender")) {
				Debug.Log("Lavender was clicked");
				Stages = Lavender;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			if (GUI.Button (Rect (positionX + 110,positionY +150,80,20), "Hydrangra")) {
				Debug.Log("Hydrangra was clicked");
				Stages = Hydrangra;
				inRange = false;
				OnMe();
				if (destroyMeAfterwards == true){
					DestroyMe();
				}
			}
			
		}
	}
	
	if(MathGUI == true && clicker == true){
			 
			 
			 answer = num1 + num2;
			if(textToShow.Length > (width/10)){
				textOffsetHeight = (Mathf.RoundToInt(textToShow.Length / (width/10))) * 10;
			}
			
			GUI.Box (Rect (positionX,positionY,width,height + 10 + textOffsetHeight), GUIMathTitle );
			GUI.Label(Rect (positionX + 10,positionY + 20, width - 10 ,height - 50), imageToShow);
			GUI.Label(Rect (positionX + 10,positionY + 20 + (height - 50), width+4 ,height - 10 + textOffsetHeight), imageToShow);
			GUI.Label(Rect (positionX + 6,positionY + 40,100,100), num1.ToString() + " " + " " + "+" + " " + num2.ToString());
			if(GUI.Button (Rect (positionX + 10,positionY +150,50,50), rand1.ToString() )){
				Destroy(this);
			}
			if(GUI.Button (Rect (positionX + 60,positionY +150,50,50), rand2.ToString())){
				Destroy(this);
			}
			if(GUI.Button (Rect (positionX + 120,positionY +150,50,50), answer.ToString())){
				MathGUI = false;
				manualClose = false;
				inRange = true;
			}
		}
}

//destorys the GUI screen after 2 seconds
function DestroyMe(){
	yield WaitForSeconds (2);
	Destroy(gameObject);
}

//this starts the planting stage with the startcase being true 
function OnMe() {
	StartCase = true;
	transform.localScale=Vector3(GrowSizeMin.x,GrowSizeMin.y,GrowSizeMin.z);
	StageId=-1;
	//Debug.Log("Plant Before");
	NextStage();
}


//if the start case is true it means the plant is allowed to grow otherwise the plant doesnt update or change 
//lateupdate tries to update the sceen every frame. 
function LateUpdate () {
//Debug.Log("Plant Update");
	if(StartCase == true){
		if(StageId>=0){
			Plant.transform.localScale=transform.localScale;
		 	if(currentTime>0f){
				currentTime-=Time.deltaTime;
				if(Stages[StageId].action==Stages[StageId].action.Grow){
					if(Stages[StageId].X) transform.localScale.x+=Stages[StageId].GrowSpeed*Time.deltaTime;
					if(Stages[StageId].Y) transform.localScale.y+=Stages[StageId].GrowSpeed*Time.deltaTime;
					if(Stages[StageId].Z) transform.localScale.z+=Stages[StageId].GrowSpeed*Time.deltaTime;
				}
				if(Stages[StageId].action==Stages[StageId].action.Decrease){
					if(Stages[StageId].X && transform.localScale.x>0.0) transform.localScale.x-=Stages[StageId].GrowSpeed*Time.deltaTime;
					if(Stages[StageId].Y && transform.localScale.y>0.0) transform.localScale.y-=Stages[StageId].GrowSpeed*Time.deltaTime;
					if(Stages[StageId].Z && transform.localScale.z>0.0) transform.localScale.z-=Stages[StageId].GrowSpeed*Time.deltaTime;
				}
				if(Stages[StageId].rotation==Stages[StageId].rotation.Rotate) transform.Rotate(Stages[StageId].RotationSpeed.x*Time.deltaTime, Stages[StageId].RotationSpeed.y*Time.deltaTime, Stages[StageId].RotationSpeed.z*Time.deltaTime);
				
			}else{
				if(StageId+1 <Stages.Count){
					NextStage();
				}
				if(StageId+1 == Stages.Count){
					Debug.Log("finished");
					FinishedPlant = true;
					
				}
				else if(Loop){
					StageId=LoopFrom-1;
			 		NextStage();
			 	}
			}
	}
		
		if(Stages[StageId].rotation==Stages[StageId].rotation.Billboard)transform.rotation = Camera.main.transform.rotation;
		
	}
	
	
}

//if the current stage is finished then it starts the next one 
function NextStage(){
	Debug.Log(StageId);
	StageId++;
	currentTime=Stages[StageId].GrowTime;
	Plant=Instantiate(Stages[StageId].GrowGO, transform.position,transform.rotation);
	Plant.transform.parent=transform;
	Plant.transform.localScale=transform.localScale;
	yield WaitForSeconds(0.001);
	for (var child : Transform in transform) {
		Mass.Add(child);
		if(Mass.Count>1){
        	Destroy(Mass[0].gameObject);
        	Mass.RemoveAt(0);
        }
	}
}
//draws the gizmos in 
function OnDrawGizmos () {
		Gizmos.color = GizmoColor;
		Gizmos.DrawCube (transform.position, Vector3(GizmoSize,GizmoSize,GizmoSize));
}
