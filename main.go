package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.LoadHTMLGlob("./index.html")
	router.Static("/src", "./src")

	router.GET("/", func(ctx *gin.Context) {
		ctx.HTML(200, "index.html", gin.H{
			"a": "agargaga",
		})
	})
	router.Run(":8080")
}
