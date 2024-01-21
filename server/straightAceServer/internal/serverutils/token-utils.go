package serverutils

import (
	"StraightAceServer/model"
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type JWTClaims struct {
	User model.User `json:"user"`
	jwt.StandardClaims
}

var (
	secretKey = []byte("your-secret-key")
)

func GenerateJWT(user model.User) (string, error) {
	claims := JWTClaims{
		User: user,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(24 * time.Hour).Unix(), // Adjust expiration as needed
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func VerifyJWT(tokenString string) (*JWTClaims, error) {
	claims := &JWTClaims{}
	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	if err != nil || !token.Valid {
		return nil, fmt.Errorf("Invalid token")
	}

	return claims, nil
}
