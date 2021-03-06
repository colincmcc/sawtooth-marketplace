# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: marketplace_ledger_sync/protobuf/holding.proto

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
  name='marketplace_ledger_sync/protobuf/holding.proto',
  package='',
  syntax='proto3',
  serialized_pb=_b('\n.marketplace_ledger_sync/protobuf/holding.proto\"k\n\x07Holding\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05label\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12\x0f\n\x07\x61\x63\x63ount\x18\x04 \x01(\t\x12\r\n\x05\x61sset\x18\x05 \x01(\t\x12\x10\n\x08quantity\x18\x06 \x01(\x12\"-\n\x10HoldingContainer\x12\x19\n\x07\x65ntries\x18\x01 \x03(\x0b\x32\x08.Holdingb\x06proto3')
)
_sym_db.RegisterFileDescriptor(DESCRIPTOR)




_HOLDING = _descriptor.Descriptor(
  name='Holding',
  full_name='Holding',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='Holding.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='label', full_name='Holding.label', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='description', full_name='Holding.description', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='account', full_name='Holding.account', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='asset', full_name='Holding.asset', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='quantity', full_name='Holding.quantity', index=5,
      number=6, type=18, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
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
  serialized_end=157,
)


_HOLDINGCONTAINER = _descriptor.Descriptor(
  name='HoldingContainer',
  full_name='HoldingContainer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='entries', full_name='HoldingContainer.entries', index=0,
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
  serialized_start=159,
  serialized_end=204,
)

_HOLDINGCONTAINER.fields_by_name['entries'].message_type = _HOLDING
DESCRIPTOR.message_types_by_name['Holding'] = _HOLDING
DESCRIPTOR.message_types_by_name['HoldingContainer'] = _HOLDINGCONTAINER

Holding = _reflection.GeneratedProtocolMessageType('Holding', (_message.Message,), dict(
  DESCRIPTOR = _HOLDING,
  __module__ = 'marketplace_ledger_sync.protobuf.holding_pb2'
  # @@protoc_insertion_point(class_scope:Holding)
  ))
_sym_db.RegisterMessage(Holding)

HoldingContainer = _reflection.GeneratedProtocolMessageType('HoldingContainer', (_message.Message,), dict(
  DESCRIPTOR = _HOLDINGCONTAINER,
  __module__ = 'marketplace_ledger_sync.protobuf.holding_pb2'
  # @@protoc_insertion_point(class_scope:HoldingContainer)
  ))
_sym_db.RegisterMessage(HoldingContainer)


# @@protoc_insertion_point(module_scope)
