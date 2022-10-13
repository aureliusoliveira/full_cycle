FROM golang:alpine AS builder

WORKDIR /go/src

COPY ./src/ .

RUN go build -o hello_go hello.go

FROM scratch

WORKDIR /tmp/src

COPY --from=builder /go/src/ /tmp/src/

CMD ["./hello_go"]