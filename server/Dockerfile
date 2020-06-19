FROM golang:1.13-alpine

RUN mkdir /root/recipe
WORKDIR /root/recipe
COPY . .

RUN go mod download
RUN go build -o . cmd/main.go

CMD ["./main"]