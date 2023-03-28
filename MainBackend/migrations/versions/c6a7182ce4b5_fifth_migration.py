"""fifth migration

Revision ID: c6a7182ce4b5
Revises: fce740a23fd9
Create Date: 2023-03-28 20:02:09.567295

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c6a7182ce4b5'
down_revision = 'fce740a23fd9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.add_column(sa.Column('address_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'addresses', ['address_id'], ['id'])
        batch_op.drop_column('location')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.add_column(sa.Column('location', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('address_id')

    # ### end Alembic commands ###
