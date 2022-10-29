package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.LoadHTMLGlob("./*.html")
	router.Static("/src", "./src")

	router.GET("/", func(ctx *gin.Context) {
		ctx.HTML(200, "index.html", gin.H{
			"a": "agargaga",
		})
	})

	// router.GET("/side", func(ctx *gin.Context) {
	// 	ctx.HTML(200, "side.html", gin.H{
	// 		"b": "aga",
	// 	})
	// })

	

	router.Run(":8080")
}
