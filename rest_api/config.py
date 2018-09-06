# Networking settings
HOST = 'localhost'
PORT = 8000
TIMEOUT = 500
KEEP_ALIVE = False

# Validator settings
VALIDATOR_HOST = 'localhost'
VALIDATOR_PORT = 4004

# Database settings
DB_HOST = 'localhost'
DB_PORT = 28015
DB_NAME = 'marketplace'

# Runtime settings
DEBUG = True

# Secret keys
# WARNING! These defaults are insecure, and should be changed for deployment
SECRET_KEY = '%FAFcvcbvr44$$kCVC23kdie'  # any string - used to encrypt & decrypt auth token
AES_KEY = 'ff3dab2a85555e9f6e21be8ed4a60a65'  # 32 character hex string - used to encrypt private key over network
BATCHER_PRIVATE_KEY = '858223b715c517399b789a5c74e01145e0770ff9c55a3b4fd8efbd13eda41c6d'  # 64 character hex string
