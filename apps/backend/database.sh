docker run --detach -p 5433:5432 --name test-database -e POSTGRES_PASSWORD=password -e POSTGRES_USER=user -e POSTGRES_DB=database postgres:latest || docker start test-database || echo "its done"
