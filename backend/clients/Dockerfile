FROM maven:3.8.4-jdk-11-slim

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN apt-get update && apt-get install dos2unix && dos2unix /usr/local/bin/entrypoint.sh && chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /usr/src/app

COPY . .

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["bash"]