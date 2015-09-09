using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class menuScript : MonoBehaviour {

	//the following will create a canvas or "panel" for quit and help menu
	public Canvas quitMenu;
	public Canvas helpMenu;

	//audio sound
	public AudioClip buttonPress;

	//the following will create buttons for the UI
	public Button startText; //EXIT PANEL
	public Button exitText; //EXIT PANEL
	public Button okayText; //HELP PANEL

	// Use this for initialization
	void Start () {
	 
		//this will attach the canvas to the respective menu
		quitMenu = quitMenu.GetComponent<Canvas> ();
		helpMenu = helpMenu.GetComponent<Canvas> ();

		//this will attach  the buttons to the respective menu
		startText = startText.GetComponent<Button> ();
		exitText = exitText.GetComponent<Button> ();
		okayText = okayText.GetComponent<Button> ();

		//this will establish that the quit and help panels do not pop up immediately
		quitMenu.enabled = false;
		helpMenu.enabled = false; 
	}

	//function to be called when the Exit button is pressed
	public void ExitPress()
	{
		audio.clip = buttonPress;
		audio.Play ();
		quitMenu.enabled = true; //pops up exit panel
		startText.enabled = false; //yes button set to false
		exitText.enabled = false; //no button set to false

	}

	//function to be called when the Help button is pressed
	public void helpPress()
	{
		audio.clip = buttonPress;
		audio.Play ();
		helpMenu.enabled = true; //pops up help panel
		okayText.enabled = false; //okay button set to false
	}

	//function to be called when No is pressed in exit panel
	public void NoPress()
	{
		audio.clip = buttonPress;
		audio.Play ();
		quitMenu.enabled = false; //closes quit panel
		startText.enabled = true; //buttons set to true
		exitText.enabled = true;
	}

	//function to be called when okay is pressed in help screen
	public void okayPress()
	{
		audio.clip = buttonPress;
		audio.Play ();
		helpMenu.enabled = false; //help panel is closed
		okayText.enabled = true;
	}

	//called when player presses play
	public void StartLevel()
	{
		audio.clip = buttonPress;
		audio.Play ();
		Application.LoadLevel (1); //loads level selector
	}

	//called when "Home" button is pressed in level
	public void MainMenu()
	{
		audio.clip = buttonPress;
		audio.Play ();
		Application.LoadLevel (0); //loads main menu
	}

	//called when player selects 'yes' in exit game panel from main menu
	public void ExitGame()
	{
		audio.clip = buttonPress;
		audio.Play ();
		Application.Quit (); //closes the game
	}

	//called when volume slider is changed
	public void VolumeControl(float volumeControl)
	{
		audio.volume = volumeControl;
	}


	
}
