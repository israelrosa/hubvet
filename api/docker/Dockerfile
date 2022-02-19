FROM node:alpine

# Adding a non-root user
ARG USERNAME=hubvet
ARG USER_UID=1001
ARG USER_GID=$USER_UID

# Create the user
RUN addgroup -g $USER_GID -S $USERNAME && \
adduser -u $USER_UID -S $USERNAME -G $USERNAME

WORKDIR /home/${USERNAME}/api

RUN chown ${USERNAME} /home/${USERNAME}/api

COPY package*.json .

RUN yarn install

COPY . .

# Set the default user. Omit if you want to keep the default as root.
USER $USERNAME

EXPOSE 3080

CMD yarn dev
