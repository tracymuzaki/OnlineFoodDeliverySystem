"""second migration

Revision ID: 2bbd9a81d3cc
Revises: dd8eeedf1768
Create Date: 2023-03-21 12:18:02.323906

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2bbd9a81d3cc'
down_revision = 'dd8eeedf1768'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('addresses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(length=255), nullable=False))
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('addresses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
        batch_op.drop_column('description')

    # ### end Alembic commands ###
