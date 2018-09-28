# Copyright 2017 Intel Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# -----------------------------------------------------------------------------

FROM ubuntu:16.04

RUN echo "deb http://repo.sawtooth.me/ubuntu/ci xenial universe" >> /etc/apt/sources.list && \
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 8AA7AF1F1091A5FD && \
    echo 'deb http://repo.sawtooth.me/ubuntu/1.0/stable xenial universe' >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y -q python3-grpcio-tools=1.1.3-1 \
        python3-pip \
        python3-sawtooth-sdk \
        python3-sawtooth-rest-api \
        nodejs

RUN apt-get install -y -q --no-install-recommends \
    curl \
    ca-certificates \
    pkg-config \
    build-essential \
    libfontconfig \
    libzmq3-dev \
 && curl -s -S -o /tmp/setup-node.sh https://deb.nodesource.com/setup_6.x \
 && chmod 755 /tmp/setup-node.sh \
 && /tmp/setup-node.sh \
 && apt-get install nodejs -y -q \
 && rm /tmp/setup-node.sh \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN npm install pm2

RUN pm2 start pm2-marketplace.json

EXPOSE 4004/tcp

WORKDIR /project/sawtooth-marketplace

ENV PATH $PATH:/project/sawtooth-marketplace

CMD ['marketplace-tp']
