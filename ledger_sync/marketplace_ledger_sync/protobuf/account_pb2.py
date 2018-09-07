# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: marketplace_ledger_sync/protobuf/account.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='marketplace_ledger_sync/protobuf/account.proto',
  package='',
  syntax='proto3',
  serialized_pb=_b('\n.marketplace_ledger_sync/protobuf/account.proto\"S\n\x07\x41\x63\x63ount\x12\x12\n\npublic_key\x18\x01 \x01(\t\x12\r\n\x05label\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12\x10\n\x08holdings\x18\x04 \x03(\t\"-\n\x10\x41\x63\x63ountContainer\x12\x19\n\x07\x65ntries\x18\x01 \x03(\x0b\x32\x08.Accountb\x06proto3')
)
_sym_db.RegisterFileDescriptor(DESCRIPTOR)




_ACCOUNT = _descriptor.Descriptor(
  name='Account',
  full_name='Account',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='public_key', full_name='Account.public_key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='label', full_name='Account.label', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='description', full_name='Account.description', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='holdings', full_name='Account.holdings', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=50,
  serialized_end=133,
)


_ACCOUNTCONTAINER = _descriptor.Descriptor(
  name='AccountContainer',
  full_name='AccountContainer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='entries', full_name='AccountContainer.entries', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=135,
  serialized_end=180,
)

_ACCOUNTCONTAINER.fields_by_name['entries'].message_type = _ACCOUNT
DESCRIPTOR.message_types_by_name['Account'] = _ACCOUNT
DESCRIPTOR.message_types_by_name['AccountContainer'] = _ACCOUNTCONTAINER

Account = _reflection.GeneratedProtocolMessageType('Account', (_message.Message,), dict(
  DESCRIPTOR = _ACCOUNT,
  __module__ = 'marketplace_ledger_sync.protobuf.account_pb2'
  # @@protoc_insertion_point(class_scope:Account)
  ))
_sym_db.RegisterMessage(Account)

AccountContainer = _reflection.GeneratedProtocolMessageType('AccountContainer', (_message.Message,), dict(
  DESCRIPTOR = _ACCOUNTCONTAINER,
  __module__ = 'marketplace_ledger_sync.protobuf.account_pb2'
  # @@protoc_insertion_point(class_scope:AccountContainer)
  ))
_sym_db.RegisterMessage(AccountContainer)


# @@protoc_insertion_point(module_scope)