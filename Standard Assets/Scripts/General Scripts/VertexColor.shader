Shader "Custom/VertexColor" {
Properties {
	_TintColor ("Tint Color", Color) = (0.5,0.5,0.5,0.5)
	_InvFade ("Soft Particles Factor", Range(0.01,3.0)) = 1.0
}
Category{
	Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" }
	Blend SrcAlpha One//OneMinusSrcAlpha
	AlphaTest Greater .00001
	ColorMask RGB
	Cull Off Lighting Off ZWrite Off //Fog { Color (0,0,0,0) }
	
    SubShader {
    Pass {
        LOD 200
         
        CGPROGRAM
        #pragma vertex vert
        #pragma fragment frag
 
        struct VertexInput {
            float4 v : POSITION;
            float4 color: COLOR;
        };
         
        struct VertexOutput {
            float4 pos : SV_POSITION;
            float4 col : COLOR;
        };
         
        VertexOutput vert(VertexInput v, uniform float4 _TintColor) {
         
            VertexOutput o;
            o.pos = mul(UNITY_MATRIX_MVP, v.v);
            o.col = v.color * _TintColor;
             
            return o;
        }
         
        float4 frag(VertexOutput o) : COLOR {
            return o.col;
        }
 
        ENDCG
        } 
    }
 }
}