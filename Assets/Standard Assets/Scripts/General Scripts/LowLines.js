#pragma strict
public static var lineMaterial;
static function CreateLineMaterial() {
	if (!lineMaterial) {
		lineMaterial = new Material("Shader \"Lines/Colored Blended\" {" + "SubShader { Pass { " + "    Blend SrcAlpha OneMinusSrcAlpha " + "    ZWrite Off Cull Off Fog { Mode Off } " + "    BindChannels {" + "      Bind \"vertex\", vertex Bind \"color\", color }" + "} } }");
//		lineMaterial.hideFlags = HideFlags.HideAndDontSave;
//		lineMaterial.shader.hideFlags = HideFlags.HideAndDontSave;
	}
}
function OnPostRender() {
	CreateLineMaterial();
	//lineMaterial.SetPass(0);
	GL.Begin(GL.LINES);
	GL.Color(new Color(1, 1, 1, 0.5F));
	GL.Vertex3(0, 0, 0);
	GL.Vertex3(1, 0, 0);
	GL.Vertex3(0, 1, 0);
	GL.Vertex3(1, 1, 0);
	GL.Color(new Color(0, 0, 0, 0.5F));
	GL.Vertex3(0, 0, 0);
	GL.Vertex3(0, 1, 0);
	GL.Vertex3(1, 0, 0);
	GL.Vertex3(1, 1, 0);
	GL.End();
}