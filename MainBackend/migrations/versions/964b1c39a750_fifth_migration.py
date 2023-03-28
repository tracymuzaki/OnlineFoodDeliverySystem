"""fifth migration

Revision ID: 964b1c39a750
Revises: c6a7182ce4b5
Create Date: 2023-03-28 20:57:22.508836

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '964b1c39a750'
down_revision = 'c6a7182ce4b5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('food_items', schema=None) as batch_op:
        batch_op.add_column(sa.Column('sub_category_id', sa.Integer(), nullable=True))
        batch_op.drop_constraint('food_items_category_id_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'sub_categories', ['sub_category_id'], ['id'])
        batch_op.drop_column('category_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('food_items', schema=None) as batch_op:
        batch_op.add_column(sa.Column('category_id', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('food_items_category_id_fkey', 'categories', ['category_id'], ['id'])
        batch_op.drop_column('sub_category_id')

    # ### end Alembic commands ###
