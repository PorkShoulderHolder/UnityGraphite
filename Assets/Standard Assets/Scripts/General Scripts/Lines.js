#pragma strict

var c1 : Color = Color.yellow;
//c1.a = 0.4;

	var c2 : Color = Color.red;
//c2.a = 0.4;
		var lengthOfLineRenderer : int = 200000;

	function Start() {
		
		 for(var i : int = 0; i < lengthOfLineRenderer; i++) {
		  var lineRenderer : LineRenderer = gameObject.AddComponent.<LineRenderer>();
			 lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
			 lineRenderer.SetWidth(0.02,0.02);
			 lineRenderer.SetVertexCount(lengthOfLineRenderer);
			var pos : Vector3 = Vector3(Random.Range(0.0, 10), Random.Range(0.0, 10), Random.Range(0.0, 10));
			var pos2 : Vector3 = Vector3(Random.Range(0.0, 10), Random.Range(0.0, 10), Random.Range(0.0, 10));

			lineRenderer.SetPosition(0, pos);
			lineRenderer.SetPosition(1, pos2);
			lineRenderer.SetColors(c1,c2);
		}
	}

//	function Update() {
//		var lineRenderer : LineRenderer = GetComponent.<LineRenderer>();
//		for(var i : int = 0; i < lengthOfLineRenderer; i++) {
//			var pos : Vector3 = Vector3(i * 0.5, Mathf.Sin(i + Time.time), 0);
//			lineRenderer.SetPosition(i, pos);
//		}
//	}