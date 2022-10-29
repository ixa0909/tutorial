package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.LoadHTMLGlob("./*.html")
	router.Static("/src/css", "./src/css")
	router.Static("/src/js", "./src/js")


	router.Static("/images", "./images")
	router.Static("/images_photo", "./images_photo")

	router.GET("/", func(ctx *gin.Context) {
		ctx.HTML(200, "index.html", gin.H{
			"a": "変数をバックエンドからフロントへ渡しています",
		})
	})

	// router.GET("/side", func(ctx *gin.Context) {
	// 	ctx.HTML(200, "side.html", gin.H{
	// 		"b": "aga",
	// 	})
	// })

	

	router.Run(":8080")
}
