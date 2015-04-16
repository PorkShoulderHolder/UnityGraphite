var z = 50.0;

static var sphere : GameObject;
static var selected : GameObject;

function Start () {
	sphere = GameObject.Find("Sphere");
	selected = GameObject.Find("Center");
}

function OnDrawGizmos () {
	var p : Vector3 = camera.ScreenToWorldPoint (Vector3 (Input.mousePosition.x, Input.mousePosition.y,z));
	sphere.transform.position = p;
	
}

function Update() {
		var p : Vector3 = camera.ScreenToWorldPoint (Vector3 (Input.mousePosition.x, Input.mousePosition.y,z));
		if(PointCloud.kdtree){
			var index = PointCloud.kdtree.FindNearest(p);
			selected.transform.position = PointCloud.uniquePoints[index];
			var id = PointCloud.idList[index];
			var info = PointCloud.neighborLookup[id];
			PointCloud.Highlight(info["indices"]);
		}
}