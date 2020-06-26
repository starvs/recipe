FROM golang:1.13-alpine

RUN mkdir /root/recipe
WORKDIR /root/recipe
COPY . .

RUN go mod download

WORKDIR /root/recipe/cmd
RUN go build main.go

CMD ["/root/recipe/cmd/main"]