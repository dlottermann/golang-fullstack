
FROM golang:1.14

RUN mkdir /server

WORKDIR /server

# Copy go mod and sum files
#COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
#RUN go mod download

COPY . .

RUN go build -o main .

EXPOSE 9090

RUN chmod +x ./main

CMD ["./main"]