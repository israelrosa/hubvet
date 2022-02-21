FROM node:alpine

ARG USERNAME=node

WORKDIR /home/${USERNAME}/api

RUN chown ${USERNAME} /home/${USERNAME}/api

COPY package*.json .

RUN yarn install

COPY . .

# Set the default user. Omit if you want to keep the default as root.
USER $USERNAME

EXPOSE 3080

CMD yarn dev
